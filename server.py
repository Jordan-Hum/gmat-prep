import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable aggressive caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

def run_server():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print(f"==========================================================")
            print(f"  GMAT PrepMaster Pro Local Server is running!")
            print(f"  URL: {url}")
            print(f"  Serving Directory: {DIRECTORY}")
            print(f"  Press Ctrl+C to stop the server.")
            print(f"==========================================================")
            
            # Auto-open browser
            try:
                webbrowser.open(url)
            except Exception as e:
                print(f"Note: Could not open browser automatically: {e}")
                
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping GMAT PrepMaster server.")
        sys.exit(0)
    except Exception as e:
        print(f"Server error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    run_server()
