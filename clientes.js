console.log('======= CLIENTES =======');

(() => {

    // UI
    const ui = {
        table: document.querySelector('table tbody')
    };

    // ACTIONS
    const getCustomers = async () => { 
        const endpoint = 'https://run.mocky.io/v3/014f9008-4416-4368-ae38-cb9f06b646a4';
        const config = {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };
        try {
            const response = await fetch(endpoint, config);
            const customers = await response.json();
            getCustomersSuccess(customers);
        } catch (error) {
            getCustomersError(error);
        }
        
    };

    const getCustomersSuccess = (customers) => {
        console.table(customers);
    };

    const getCustomersError = () => {
        console.log(error);
    };


    // BINDING EVENTS
    getCustomers();


})();