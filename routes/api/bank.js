const router = require("express").Router();
const groupsController = require("../../controllers/bankController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/"
router.get(
    '/:accountId/transactions',
    asyncWrapper(async (req, res) => {
        const { accountId } = req.params;
        const transactions = await retrieveTransactionsByAccountId(accountId);
        res.json(sanitizeTransactions(transactions));
    })
);