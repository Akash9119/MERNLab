
/**
 *  - Test route for the database connection
 *  - GET /api/test
 */
async function testRoute(req,res) {
    res.status(200).json({
        message: "Connected to the test route",
    })
}

module.exports = { testRoute }