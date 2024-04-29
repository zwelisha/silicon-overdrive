import express from 'express';
import Slack from '@slack/bolt';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const slackApp = new Slack.App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN
});

app.use(express.json());

app.post('/api/send-channel-message', async (req, res) => {
    const { token, channel, text } = req.body;
    
    if (!token || !channel || !text) {
        return res.status(400).json({ 
            success: false, 
            message: "Please ensure the following parameters: token, channel, text, are passed!" 
        });
    }

    try {
        await slackApp.client.chat.postMessage({
            token,
            channel,
            text
        });
        res.status(200).json({ success: true, message: `Message sent successfully to ${channel} channel` });
    } catch (error) {
        console.error(`Error sending message to Slack channel: ${channel}:`, error);
        res.status(500).json({ success: false, message: `Failed to send message to Slack channel ${channel}` });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
