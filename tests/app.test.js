const request = require('supertest');
const express = require('express');
const Slack = require('@slack/bolt');
const dotenv = require('dotenv');

// Remaining code...


dotenv.config();

const app = express();
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

describe('POST /api/send-channel-message', () => {
    it('responds with success message when parameters are valid', async () => {
        const requestBody = {
            token: process.env.SLACK_BOT_TOKEN,
            channel: process.env.SLACK_CHANNEL,
            text: 'Sharks are kiffer than bulls'
        };
        const response = await request(app)
            .post('/api/send-channel-message')
            .send(requestBody);

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toContain('Message sent successfully to test_channel channel');
    });
    
    it('responds with error message when parameters are missing', async () => {
        const requestBody = {
        };
        const response = await request(app)
            .post('/api/send-channel-message')
            .send(requestBody);

        expect(response.status).toBe(400);
        expect(response.body.success).toBe(false);
        expect(response.body.message).toContain('Please ensure the following parameters: token, channel, text, are passed!');
    });
});
