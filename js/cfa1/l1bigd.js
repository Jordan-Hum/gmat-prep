// CFA Level I · Quantitative Methods · Learning module 11: Introduction to Big Data Techniques.
window.NOTES = window.NOTES || {}; window.QB_HARD = window.QB_HARD || {}; window.GLOSSARY = window.GLOSSARY || [];

window.NOTES.l1bigd = `
<p class="syl">CFA Level I · Quantitative Methods · Learning module 11 of 11 · Introduction to Big Data Techniques</p>
<p>A short, conceptual module: what "big data" is, where it comes from, and how artificial intelligence and machine learning turn it into investment insight. Questions are definitional ("which characteristic…", "which type of learning…"), so learn the vocabulary precisely. Level II covers machine learning in depth.</p>

<h3>1. Fintech and big data</h3>
<p><b>Fintech</b> means technology-driven innovation in financial services: data analysis, automated trading, robo-advice, distributed ledgers. Its growth rests on the explosion of <b>big data</b>, described by the "V"s:</p>
<table>
  <tr><th>Characteristic</th><th>Meaning</th></tr>
  <tr><td><b>Volume</b></td><td>The sheer quantity of data (terabytes, petabytes and beyond)</td></tr>
  <tr><td><b>Velocity</b></td><td>The speed at which data are created and must be processed (real-time, low latency)</td></tr>
  <tr><td><b>Variety</b></td><td>The range of formats: structured, semi-structured and unstructured</td></tr>
  <tr><td><b>Veracity</b></td><td>The <b>reliability and credibility</b> of the data and its sources (accuracy, noise, bias)</td></tr>
  <tr><td>Value</td><td>Whether the data can be turned into useful, decision-relevant information</td></tr>
</table>
<ul>
  <li><b>Structured</b> data are organized in rows and columns (prices, financial statements). <b>Semi-structured</b> data have some organization (HTML, XML, JSON, emails). <b>Unstructured</b> data have none (text, images, audio, video, social media posts) and need special processing.</li>
  <li><b>Traditional</b> sources: exchanges, company filings, government statistics. <b>Alternative data</b> sources: <b>individuals</b> (social media, product reviews, web searches), <b>business processes</b> (credit card transactions, corporate exhaust such as supply-chain data), and <b>sensors</b> (satellite images, geolocation, the Internet of Things).</li>
  <li>Challenges: data quality and selection bias, missing values, outliers, cost, and legal/ethical issues (privacy, data ownership).</li>
</ul>

<h3>2. Artificial intelligence and machine learning <span class="hot">Highly tested</span></h3>
<p><b>Artificial intelligence (AI)</b> lets computers perform tasks that usually need human intelligence. <b>Machine learning (ML)</b> is the part of AI in which algorithms <b>learn patterns from data</b> without being explicitly programmed with rules.</p>
<table>
  <tr><th>Type</th><th>Data</th><th>Typical tasks</th></tr>
  <tr><td><b>Supervised learning</b></td><td><b>Labeled</b>: inputs paired with known outputs (target)</td><td><b>Regression</b> (predict a number) and <b>classification</b> (predict a category, e.g. default/no default, fraud/not fraud)</td></tr>
  <tr><td><b>Unsupervised learning</b></td><td><b>Unlabeled</b>: no target</td><td><b>Clustering</b> (group similar companies or customers) and <b>dimension reduction</b> (summarize many variables in a few factors)</td></tr>
  <tr><td><b>Deep learning</b></td><td>Large, often unstructured data sets</td><td>Multi-layer <b>neural networks</b> for complex patterns: image, speech and language recognition</td></tr>
</table>
<ul>
  <li>Data are split into a <b>training</b> set (to fit the model), a <b>validation</b> set (to tune it) and a <b>test</b> set (to evaluate it on unseen data).</li>
  <li><b>Overfitting</b>: the model learns the training data too well, including noise, so it performs poorly on new data (too complex). <b>Underfitting</b>: the model is too simple to capture the real relationships, so it performs poorly even on training data.</li>
  <li>ML outputs can be a <b>black box</b>: hard to interpret, so explaining decisions is harder. ML also needs large, high-quality data sets; garbage in, garbage out.</li>
</ul>

<h3>3. Processing and using big data</h3>
<ul>
  <li><b>Data processing steps</b>: capture (collect and transform into usable form), curation (clean: remove errors and fill gaps), storage (databases, the cloud), search (query and retrieve) and transfer (move data to the analysis tool).</li>
  <li><b>Data visualization</b>: charts, heat maps, tag (word) clouds and mind maps make large data sets understandable.</li>
  <li><b>Natural language processing (NLP)</b>: the analysis of human language; used for <b>sentiment analysis</b> of news, social media, earnings calls and central bank statements, and for monitoring communications for compliance.</li>
  <li><b>Applications</b>: text analytics (e.g. scanning filings), risk analysis and fraud detection, <b>algorithmic and high-frequency trading</b>, <b>robo-advisors</b> (automated, low-cost portfolio advice and rebalancing), and stress testing.</li>
</ul>

<div class="how"><b>How it's tested:</b> matching definitions (which V is reliability = veracity; labeled data = supervised; grouping = unsupervised clustering), identifying overfitting vs underfitting, classifying data as structured or unstructured and sources as alternative data, and recognizing NLP applications.</div>
<div class="key"><b>Checklist: you should be able to…</b><ul>
  <li>Describe the characteristics of big data and the types and sources of data, including alternative data.</li>
  <li>Distinguish supervised, unsupervised and deep learning, and overfitting from underfitting.</li>
  <li>Describe data processing steps, visualization and NLP, and give applications in investment management.</li>
</ul></div>
`;

window.QB_HARD.l1bigd = [
  ["Which characteristic of big data refers to the reliability and credibility of the data sources?",
    ["Veracity", "Velocity", "Variety"],
    "Volume = quantity; velocity = speed of creation; variety = range of formats; veracity = trustworthiness of the data.", "r"],
  ["A model is trained on historical loan data labeled 'default' or 'no default' so it can classify new applicants. This is an example of:",
    ["Supervised learning", "Unsupervised learning", "Reinforcement learning"],
    "Supervised learning uses labeled inputs and outputs to learn a prediction or classification rule. Unsupervised learning finds structure in unlabeled data.", "r"],
  ["A machine learning model fits its training data almost perfectly but forecasts poorly on new data. The model most likely suffers from:",
    ["Overfitting", "Underfitting", "Too little variance error"],
    "Overfitting means the model has learned noise in the training sample (high variance), so it doesn't generalize out-of-sample.", "r"],
  ["The speed at which data are generated and must be processed is the big data characteristic called:",
    ["Velocity", "Volume", "Variety"],
    "Velocity refers to speed (real-time data, low latency); volume to quantity; variety to formats.", "r"],
  ["Satellite images of retailers' parking lots used to forecast sales are an example of:",
    ["Alternative data generated by sensors", "Traditional data from company filings", "Structured data from business processes"],
    "Satellite imagery is an alternative data source produced by sensors; it's unstructured.", "r"],
  ["Which of the following is unstructured data?",
    ["Audio recordings of earnings calls", "A table of daily closing prices", "Quarterly balance sheet figures"],
    "Audio, video, images and free text have no predefined row-column structure.", "r"],
  ["Grouping companies into categories based on similarities in their financial ratios, without predefined labels, is an application of:",
    ["Unsupervised learning", "Supervised learning", "Natural language processing"],
    "With no labels or target variable, the task is clustering, an unsupervised learning method.", "s"],
  ["A model that is too simple to capture the true relationships in the data, and so performs poorly even on its training data, is said to be:",
    ["Underfitted", "Overfitted", "Black-boxed"],
    "Underfitting = too simple (high bias). Overfitting = fits training noise and fails on new data.", "r"],
  ["Analyzing the tone of central bank statements to gauge the likely direction of policy rates is an application of:",
    ["Natural language processing", "High-frequency algorithmic trading", "Dimension reduction"],
    "NLP (sentiment analysis) extracts meaning and tone from human language.", "s"],
  ["Deep learning algorithms are best described as:",
    ["Neural networks with many layers", "Rules written explicitly by programmers", "Simple linear regressions"],
    "Deep learning uses multi-layer neural networks to learn complex, often non-linear patterns, e.g. in images and language.", "r"],
  ["In machine learning, the data set used to evaluate a final model's performance on unseen data is the:",
    ["Test set", "Training set", "Validation set"],
    "The training set fits the model, the validation set tunes it, and the test set gives an unbiased evaluation.", "r"],
  ["Cleaning data by identifying and correcting errors and filling gaps is the data processing step called:",
    ["Curation", "Capture", "Transfer"],
    "Curation ensures data quality; capture collects and converts data; transfer moves it to the analytical tool.", "r"],
];

window.GLOSSARY.push(
  ["Big data Vs", "Volume (quantity), velocity (speed), variety (formats), veracity (reliability), value.", "l1bigd"],
  ["Structured vs unstructured data", "Rows and columns (prices) vs no predefined format (text, images, audio).", "l1bigd"],
  ["Alternative data", "Non-traditional data from individuals, business processes and sensors.", "l1bigd"],
  ["Supervised vs unsupervised learning", "Labeled data (regression, classification) vs unlabeled (clustering, dimension reduction).", "l1bigd"],
  ["Underfitting", "Model too simple to capture the relationships; poor even in-sample.", "l1bigd"],
  ["Natural language processing", "Analysis of human language, e.g. sentiment analysis of news or filings.", "l1bigd"]
);
