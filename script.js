let deposits = [
    { bankName: "Газпромбанк", investName: "Ваш успех", currency: "RUB", incomeType: 6.22, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: false },
    { bankName: "Кредит Европа Банк", investName: "Оптимальный на 2 года", currency: "RUB", incomeType: 6.45, sumMin: 100000, sumMin: null, termMin: 24, termMax: 24, canDeposit: false },
    { bankName: "Банк Зенит", investName: "Праздничный 500+", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: null, termMin: 17, termMax: 17, canDeposit: false },
    { bankName: "Еврофинанс Моснарбанк", investName: "Классический", currency: "RUB", incomeType: 6.95, sumMin: 30000, sumMax: null, termMin: 12, termMax: 24, canDeposit: false },
    { bankName: "Джей энд Ти Банк", investName: "Магнус-Онлайн", currency: "RUB", incomeType: 6.8, sumMin: 100000, sumMax: null, termMin: 6, termMax: 6, canDeposit: false },
    { bankName: "МТС Банк", investName: "В вашу пользу", currency: "RUB", incomeType: 6.75, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Эс-Би-Ай Банк", investName: "Свои правила Онлайн", currency: "RUB", incomeType: 6.7, sumMin: 30000, sumMax: 30000000, termMin: 24, termMax: 24, canDeposit: false },
    { bankName: "Банк Уралсиб", investName: "Прогноз отличный", currency: "RUB", incomeType: 6.7, sumMin: 100000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
    { bankName: "Инвестторгбанк", investName: "ИТБ-Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
    { bankName: "Транскапиталбанк", investName: "ТКБ.Постоянный доход", currency: "RUB", incomeType: 6.6, sumMin: 50000, sumMax: null, termMin: 37, termMax: 37, canDeposit: false },
    { bankName: "Совкомбанк", investName: "Зимний праздник с Халвой", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 2, termMax: 2, canDeposit: true },
    { bankName: "Агророс", investName: "Медовый месяц", currency: "RUB", incomeType: 5.51, sumMin: 20000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
    { bankName: "Росдорбанк", investName: "Онлайн-1", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: 150000000, termMin: 1, termMax: 1, canDeposit: true },
    { bankName: "Национальный Стандарт", investName: "Сберегательный стандарт", currency: "RUB", incomeType: 5.1, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
    { bankName: "Россия", investName: "Морозные узоры", currency: "RUB", incomeType: 5, sumMin: 100000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
    { bankName: "Кузнецкий Мост", investName: "Накопительный", currency: "RUB", incomeType: 4.85, sumMin: 50000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
    { bankName: "Тексбанк", investName: "Универсальный", currency: "RUB", incomeType: 4.6, sumMin: 10000, sumMax: null, termMin: 1, termMax: 1, canDeposit: true },
    { bankName: "Морской Банк", investName: "Правильным курсом +", currency: "RUB", incomeType: 4.55, sumMin: 100000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
    { bankName: "Норвик Банк", investName: "Лаконичный", currency: "RUB", incomeType: 4.5, sumMin: 500, sumMax: 50000000, termMin: 1, termMax: 1, canDeposit: true },
    { bankName: "Промсельхозбанк", investName: "Конструктор", currency: "RUB", incomeType: 4.5, sumMin: 10000, sumMax: null, termMin: 1, termMax: 3, canDeposit: true },
    { bankName: "Акибанк", investName: "Онлайн", currency: "RUB", incomeType: 6.5, sumMin: 1000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Банк БКФ", investName: "Ключевой стандарт", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: null, termMin: 6, termMax: 13, canDeposit: true },
    { bankName: "Экспобанк", investName: "Специальный (в конце срока)", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: 10000000, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Инвестторгбанк", investName: "ИТБ-Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Транскапиталбанк", investName: "ТКБ.Пополняемый", currency: "RUB", incomeType: 6.15, sumMin: 50000, sumMax: 30000000, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Евроазиатский Инвестиционный Банк", investName: "Классика", currency: "RUB", incomeType: 6.1, sumMin: 100000, sumMax: null, termMin: 6, termMax: 12, canDeposit: true },
    { bankName: "Тимер Банк", investName: "Надежный выбор", currency: "RUB", incomeType: 6, sumMin: 10000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Евразийский Банк", investName: "TURBO MAXIMUM", currency: "RUB", incomeType: 6, sumMin: 30000, sumMax: 299999, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Таврический Банк", investName: "Достижимый (онлайн)", currency: "RUB", incomeType: 6, sumMin: 50000, sumMax: null, termMin: 6, termMax: 6, canDeposit: true },
    { bankName: "Экспобанк", investName: "Юбилейный 25 (в конце срока)", currency: "RUB", incomeType: 6.5, sumMin: 100000, sumMax: 20000000, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Крокус-Банк", investName: "Ежемесячный доход", currency: "RUB", incomeType: 6.35, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Промсельхозбанк", investName: "Ваш выбор", currency: "RUB", incomeType: 6.3, sumMin: 10000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Нацинвестпромбанк", investName: "Прибыльный", currency: "RUB", incomeType: 6.3, sumMin: 50000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Ишбанк", investName: "Накопительный", currency: "RUB", incomeType: 6.25, sumMin: 100000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Примсоцбанк", investName: "Новогодний чулок (333 дня)", currency: "RUB", incomeType: 6.2, sumMin: 10000, sumMax: null, termMin: 11, termMax: 11, canDeposit: true },
    { bankName: "Еврофинанс Моснарбанк", investName: "Пополняемый", currency: "RUB", incomeType: 6.75, sumMin: 1000000, sumMaxn: null, termMin: 12, termMax: 24, canDeposit: true },
    { bankName: "Евроазиатский Инвестиционный Банк", investName: "VIP", currency: "RUB", incomeType: 6.35, sumMin: 1000000, sumMax: null, termMin: 9, termMax: 12, canDeposit: true },
    { bankName: "Российская Финансовая Корпорация", investName: "Универсальный", currency: "RUB", incomeType: 6, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
    { bankName: "Московский Кредитный Банк", investName: "МЕГА Онлайн", currency: "RUB", incomeType: 5.8, sumMin: 1000, sumMax: null, termMin: 3, termMax: 5, canDeposit: true },
    { bankName: "Александровский", investName: "Черника 19/20", currency: "RUB", incomeType: 5.6, sumMin: 20000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
    { bankName: "Финанс Бизнес Банк", investName: "Мандариновый!", currency: "RUB", incomeType: 5.6, sumMin: 50000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
    { bankName: "ЦентроКредит", investName: "Доход Плюс", currency: "USD", incomeType: 1.15, sumMin: 5000, sumMax: null, termMin: 3, termMax: 3, canDeposit: true },
    { bankName: "Совкомбанк", investName: "Удобный (в долларах)", currency: "USD", incomeType: 1, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
    { bankName: "Веста", investName: "Веста - Копилка", currency: "USD", incomeType: 1, sumMin: 10000, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
    { bankName: "Славия", investName: "Славный Капитал", currency: "USD", incomeType: 0.85, sumMin: 5000, sumMax: null, termMin: 3, termMax: 4, canDeposit: true },
    { bankName: "Роскосмосбанк", investName: "Комфортный", currency: "USD", incomeType: 0.8, sumMin: 500, sumMax: null, termMin: 3, termMax: 6, canDeposit: true },
    { bankName: "ФорБанк", investName: "Срочный накопительный", currency: "USD", incomeType: 0.8, sumMin: 10000, sumMax: 500000, termMin: 3, termMax: 3, canDeposit: true },
    { bankName: "Московский Областной Банк", investName: "Гарантированный доллар", currency: "USD", incomeType: 0.75, sumMin: 50, sumMax: null, termMin: 4, termMax: 4, canDeposit: true },
    { bankName: "Объединенный Резервный Банк", investName: "ОРБ-Накопительный (в конце срока)", currency: "USD", incomeType: 1.6, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Банк Агора", investName: "Срочный", currency: "USD", incomeType: 1.5, sumMin: 1000,sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Тинькофф Банк", investName: "СмартВклад (с повышенной ставкой)", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Первый Инвестиционный Банк", investName: "Закон сохранения", currency: "USD", incomeType: 1.5, sumMin: 1000, sumMax: null, termMin: 12, termMax: 12, canDeposit: true },
    { bankName: "Новый Век", investName: "Сберегательный", currency: "USD", incomeType: 1.5, sumMin: 5000, sumMax: 20000, termMin: 12, termMax: 12, canDeposit: true }
    ];

    class Application {
    constructor() {
        this.button = document.getElementById('button-choose');
        this.button.addEventListener('click', this.getData);
    }
    getData = () => {
        let initialSum = +document.getElementById('initial-sum-input').value;
        let monthlyRefill = +document.getElementById('monthly').value;
        let depositTime = +document.getElementById('time').value;
        let depositCurrency = document.getElementById('currency').value;
        let resultBox = document.getElementById('result');
        let table = document.getElementById('resultTable');

        let clientData = new Deposit(initialSum, monthlyRefill, depositTime, depositCurrency);
        clientData.check();
        console.log(clientData);

        let calc = new Calculator();
        let result = calc.getDataFromClient();
        console.log(result);

        function drawTable(result) {
            if (result[0] == undefined) {
                resultBox.innerHTML = "<p>Нет подходящих вариантов</p>";
                resultBox.style.color = '#8B0000';
                resultBox.style.fontSize = '25px';
                resultBox.style.textAlign  = 'center';
            }
            if (result[0] != undefined) {
                let rows = [];
                result.forEach(element => rows.push("<tr><td>" + element.bankName + "</td><td>" + element.investName + "</td><td>" +
                    element.incomeType + "</td><td>" + element.finalSum + "</td></tr>"))
                table.style.display = "block";
                let fullRows = "";
                for (let i = 0; i < rows.length; i++) {
                    fullRows += rows[i];
                }
                table.innerHTML = "<tr class='head'><th>Название банка</th><th>Вклад</th><th>Процент</th><th>Итоговая сумма</th></tr>"
                    + fullRows;
            }
        }
        drawTable(result);
    }
}

class Deposit {
    constructor(initial, monthly, time, currency) {
        this.initial = initial;
        this.monthly = monthly;
        this.time = time;
        this.currency = currency;
    }
    check = () => {
        if (this.initial >= 0 && this.monthly >= 0 && Number.isInteger(+this.time) && this.time > 0 && (this.currency == 'RUB' || this.currency == 'USD')) {
            console.log('ok');
        }
        else if (this.initial == "" || this.monthly == "" || this.time == "" || this.currency){
            alert ('Введите данные');
        }
        else if (this.currency != 'RUB' || this.currency != 'USD'){
            alert ('Некорректное значение валюты');
        }
       
        else {
            alert('Ошибка во вводе данных!');
        }
    }
}


class BankProduct {
    constructor(initial, monthly, time, currency) {
        this.initial = initial;
        this.monthly = monthly;
        this.time = time;
        this.currency = currency;
    }
    
      getBankArray = () => {
        let banks = [...deposits];       
        return banks;
    }
}

class Calculator {
    getDataFromClient = (initialSum, monthlyRefill, depositTime, depositCurrency) => {
        initialSum = +document.getElementById('initial-sum-input').value;
        monthlyRefill = +document.getElementById('monthly').value;
        depositTime = +document.getElementById('time').value;
        depositCurrency = document.getElementById('currency').value;

        let bankProduct = new BankProduct();
        let newArray = bankProduct.getBankArray();

        function currencyFilter(depositCurrency, newArray) {
            let currencyArray = [];
            newArray.forEach(element => {
                if (element.currency == depositCurrency) {
                    currencyArray.push(element);
                }
            });            
            return currencyArray;
        }

        let firstFiltered = currencyFilter(depositCurrency, newArray);
        console.log(firstFiltered);

        function canRefill(monthlyRefill, array) {
            let resultArray = [];
            for (let i = 0; i < array.length; i++) {
                if (monthlyRefill == 0 && array[i].canDeposit == false) {
                    resultArray.push(array[i]);
                }
                else if (monthlyRefill > 0 && array[i].canDeposit == true) {
                    resultArray.push(array[i]);
                }
            }
            return resultArray;
        }
        let secondFiltered = canRefill(monthlyRefill, firstFiltered);
        console.log(secondFiltered);

        function minMaxAmountFilter(initialSum, array) {
            let result = array.filter(element => element.sumMin <= initialSum);
            let result2 = [];
            result.forEach(element => {
                if (element.sumMax == null) {
                    result2.push(element);
                }
                else if (element.sumMax >= initialSum) {
                    result2.push(element);
                }
            }
            )
            return result2;
        }

        let thirdFiltered = minMaxAmountFilter(initialSum, secondFiltered);
        console.log(thirdFiltered);

        function minMaxTermFilter(depositTime, array) {
            let result = array.filter(element => element.termMin <= depositTime);
            return result;
        }

        let forthFiltered = minMaxTermFilter(depositTime, thirdFiltered);
        console.log(forthFiltered);

        function bestSuggestion(array, initialSum, depositTime) {
            let result = array.map(element => {
                return {
                    bankName: element.bankName,
                    investName: element.investName,
                    incomeType: element.incomeType,
                    finalSum: Math.ceil(initialSum * (1 + Math.pow((1 + element.incomeType / 100 / 12), depositTime / 12)))
                }
            });

            const newArr = [...result];
            newArr.sort((objectOne, objectTwo) => objectTwo.finalSum - objectOne.finalSum);
            let maximum = newArr[0];
            const equalToMaximum = newArr.filter(element => element.finalSum == maximum.finalSum);
            return equalToMaximum;
        }

        let finalSuggestion = bestSuggestion(forthFiltered, initialSum, depositTime);
        return finalSuggestion;
    }
}

new Application();
