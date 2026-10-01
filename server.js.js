const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Dashboard Route tailored for AWS Amplify environment
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AWS Amplify | Cloud & DevOps Command Center</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; color: #333; margin: 0; padding: 30px; }
                .container { max-width: 950px; margin: auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
                h1 { color: #232f3e; border-bottom: 3px solid #ff9900; padding-bottom: 12px; margin-top: 0; }
                p { line-height: 1.6; color: #555; }
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 30px; }
                .card { background: #fafafa; border: 1px solid #e1e4e8; border-radius: 8px; padding: 25px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.01); }
                .card h3 { margin-top: 0; color: #0073bb; }
                .status-badge { display: inline-block; padding: 5px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; color: white; background: #28a745; }
                .footer { margin-top: 40px; text-align: center; font-size: 13px; color: #777; border-top: 1px solid #eee; padding-top: 15px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 AWS Amplify & DevOps Command Center</h1>
                <p>This web dashboard is integrated with <strong>AWS Amplify Hosting</strong>, tracking continuous deployment pipelines and cloud infrastructure metrics.</p>
                
                <div class="grid">
                    <div class="card">
                        <h3>☁️ AWS Cloud Services</h3>
                        <p><strong>Hosting Platform:</strong> AWS Amplify</p>
                        <p><strong>Edge Delivery:</strong> Amazon CloudFront</p>
                        <p><strong>Global CDN Status:</strong> <span class="status-badge">Active</span></p>
                    </div>
                    
                    <div class="card">
                        <h3>⚙️ Kubernetes & Compute</h3>
                        <p><strong>Orchestration:</strong> Amazon EKS / Lambda</p>
                        <p><strong>Scaling Policy:</strong> Automatic (Serverless)</p>
                        <p><strong>Cluster Health:</strong> <span class="status-badge">Optimal</span></p>
                    </div>
                    
                    <div class="card">
                        <h3>🔄 CI/CD & DevOps</h3>
                        <p><strong>Source Control:</strong> GitHub Repository</p>
                        <p><strong>Build Automation:</strong> Amplify CI/CD Pipeline</p>
                        <p><strong>Deployment:</strong> Continuous Delivery</p>
                    </div>
                </div>

                <div class="footer">
                    <p>Environment: <strong>${process.env.NODE_ENV || 'production'}</strong> | Managed via AWS Amplify Console</p>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Health check endpoint
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

app.listen(PORT, () => {
    console.log(`Amplify DevOps dashboard service running on port ${PORT}`);
});