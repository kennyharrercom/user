export default function registerRequest(req, res) {
    const { inviteCode } = req.query || {};
    console.log(inviteCode);
}
