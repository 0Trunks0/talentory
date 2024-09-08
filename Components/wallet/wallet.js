document.addEventListener('DOMContentLoaded', () => {
    const balanceElement = document.getElementById('wallet-balance');
    const transactionHistoryElement = document.getElementById('transaction-history');
    const addFundsForm = document.getElementById('add-funds-form');

    // Fetch wallet balance and transaction history
    async function loadWalletData() {
        try {
            const response = await fetch('/api/wallet');
            const data = await response.json();
            balanceElement.textContent = data.balance.toFixed(2);
            transactionHistoryElement.innerHTML = data.transactions.map(tx => `<li>${tx.date}: ${tx.amount} INR</li>`).join('');
        } catch (error) {
            console.error('Error loading wallet data:', error);
        }
    }

    loadWalletData();

    // Handle form submission to add funds
    addFundsForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        try {
            const response = await fetch('/api/wallet/add-funds', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount })
            });
            const data = await response.json();
            if (data.success) {
                loadWalletData();
            } else {
                alert('Failed to add funds');
            }
        } catch (error) {
            console.error('Error adding funds:', error);
        }
    });
});
