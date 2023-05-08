const router = require('express').Router();

const { google } = require('googleapis');

const oauthClient = new google.auth.OAuth2(
    '781317250288-9r3o4v0to0rmibjr4srcaft1an0fmko2.apps.googleusercontent.com',
    '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',
    'http://localhost:3000'
);

const generateCode = async (req, res) => {
    const { code } = req.body;

    const response = await oauthClient.getToken(code);

    res.json(response.tokens.access_token);
};

const getAll = async (req, res) => {
    const token = req.query.token;
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    oauthClient.setCredentials({'access_token': token});
    const calendar = google.calendar('v3');

    const calendars = process.env.CALENDAR_IDS.split(', ');
    let events = [];

    for (const calendarId of calendars) {
        const calendarEvents = await getByCalendarId(calendar, oauthClient, today, tomorrow, calendarId);
        events.push(calendarEvents);
    }

    res.json(events);
};

const getByCalendarId = async (calendar, oauthClient, today, tomorrow, calendarId) => {
    const response = await calendar.events.list({
        auth: oauthClient,
        calendarId: calendarId,
        timeMin: today,
        timeMax: tomorrow
    });

    return response;
};

router.post('/code', generateCode);
router.get('/', getAll);

module.exports = router;