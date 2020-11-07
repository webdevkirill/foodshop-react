const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const {email, password} = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    },
});

transporter.use('compile', htmlToText());

const sendOrderEmail = order => {
    const options = {
        from: `food-shop-react <${email}>`,
        to: order.email,
        subject: 'Ваш заказ из food-shop-react',
        html: `
            <div>
                <h2>Добрый день ${order.clientName}</h2>
                <h3>Ваш заказ:</h3>
                <ul>
                    ${order.order.map(({name, count, price}) => (
                        `<li>${name} - ${count} шт. Цена ${price * count} руб.</li>`
                    ))}
                </ul>
                <p>Итого: ${order.order.reduce((sum, item) => sum + item.price * item.count, 0)} руб.</p>
            </div>
        `
    };
    transporter.sendMail(options);
}

exports.sendUserEmail = functions.database.ref('orders/{pushID}').
    onCreate(order => sendOrderEmail(order.val()));