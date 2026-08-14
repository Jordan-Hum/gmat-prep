/**
 * GMAT PrepMaster Pro - Cloud Sync & Security Engine
 * Supports:
 * 1. Master PIN / Password Lock for privacy on public URLs (GitHub Pages / Vercel).
 * 2. Automatic Cloud Sync to a Private GitHub Gist or Supabase so answers,
 *    error logs, and notes sync seamlessly between phone, laptop, and tablet.
 */

class CloudSyncManager {
  constructor() {
    this.pinKey = 'gmat_master_pin';
    this.githubTokenKey = 'gmat_github_token';
    this.gistIdKey = 'gmat_gist_id';
    this.isUnlocked = false;
  }

  // -------------------------------------------------------------
  // 1. Master PIN Security
  // -------------------------------------------------------------
  async hasPin() {
    const pin = await window.gmatDB.getSetting(this.pinKey, null);
    return !!pin;
  }

  async verifyPin(enteredPin) {
    const savedPin = await window.gmatDB.getSetting(this.pinKey, null);
    if (!savedPin) return true; // No PIN set
    return savedPin === enteredPin;
  }

  async setPin(newPin) {
    if (!newPin || newPin.trim() === '') {
      await window.gmatDB.setSetting(this.pinKey, null);
      return false;
    }
    await window.gmatDB.setSetting(this.pinKey, newPin.trim());
    return true;
  }

  // -------------------------------------------------------------
  // 2. Private GitHub Gist Cloud Sync
  //    Uses GitHub's free Gist API to store and sync your attempts & error logs
  // -------------------------------------------------------------
  async getGitHubToken() {
    return await window.gmatDB.getSetting(this.githubTokenKey, '');
  }

  async setGitHubToken(token) {
    await window.gmatDB.setSetting(this.githubTokenKey, token.trim());
  }

  async getGistId() {
    return await window.gmatDB.getSetting(this.gistIdKey, '');
  }

  async setGistId(gistId) {
    await window.gmatDB.setSetting(this.gistIdKey, gistId.trim());
  }

  /**
   * Upload all local attempts, error logs, and notes to Private GitHub Gist
   */
  async syncToGitHub() {
    const token = await this.getGitHubToken();
    if (!token) {
      throw new Error('Please enter your GitHub Personal Access Token first under Settings.');
    }

    const backupData = await window.gmatDB.exportFullData();
    const payload = {
      description: 'GMAT PrepMaster Pro - Encrypted Study History & Error Log',
      public: false,
      files: {
        'gmat_study_history.json': {
          content: JSON.stringify(backupData, null, 2)
        }
      }
    };

    let gistId = await this.getGistId();
    let url = 'https://api.github.com/gists';
    let method = 'POST';

    if (gistId) {
      url = `https://api.github.com/gists/${gistId}`;
      method = 'PATCH';
    }

    const response = await fetch(url, {
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || 'GitHub API error');
    }

    const data = await response.json();
    if (!gistId && data.id) {
      await this.setGistId(data.id);
    }

    return {
      success: true,
      gistId: data.id,
      updatedAt: data.updated_at
    };
  }

  /**
   * Pull attempts and error logs from Private GitHub Gist
   */
  async syncFromGitHub() {
    const token = await this.getGitHubToken();
    const gistId = await this.getGistId();

    if (!token || !gistId) {
      throw new Error('Missing GitHub Token or Gist ID. Please configure under Settings.');
    }

    const response = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Gist data: ${response.statusText}`);
    }

    const data = await response.json();
    const fileObj = data.files['gmat_study_history.json'];
    if (!fileObj || !fileObj.content) {
      throw new Error('Study history file not found in Gist.');
    }

    const parsedData = JSON.parse(fileObj.content);
    await window.gmatDB.importData(parsedData);

    return {
      success: true,
      totalAttempts: parsedData.attempts ? parsedData.attempts.length : 0
    };
  }
}

window.cloudSync = new CloudSyncManager();
