import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const req = await request.json();
    let error = false;

    const message = {
        from: process.env.ADDRESS_FROM,
        to: [
            process.env.ADDRESS_TO_1,
            process.env.ADDRESS_TO_2,
        ],
        subject: `Поступила заявка на звонок: ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`,
        html: ` <p style="font-weight: bold">Имя: <span style="font-weight: normal">${req?.firstName.length ? req?.firstName : 'Нет'}</span></p>
                <p style="font-weight: bold">Фамилия: <span style="font-weight: normal">${req?.lastName.length ? req?.lastName : 'Нет'}</span></p>
                <p style="font-weight: bold">Emai: <span style="font-weight: normal">${req?.email.length ? req?.email : 'Нет'}</span></p>
                <p style="font-weight: bold">Телефон: <span style="font-weight: normal">${req?.phone.length ? req?.phone : 'Нет'}</span></p>
                <p style="font-weight: bold">Компания: <span style="font-weight: normal">${req?.company.length ? req?.company : 'Нет'}</span></p>
                <p style="font-weight: bold">Должность: <span style="font-weight: normal">${req?.post.length ? req?.post : 'Нет'}</span></p>
                <p style="font-weight: bold">Комментарий: <span style="font-weight: normal">${req?.comment.length ? req?.comment : 'Нет'}</span></p>
           `,
    };

    const transporter = nodemailer.createTransport({
        service: 'mail.ru',
        auth: {
            user: process.env.ADDRESS_FROM,
            pass: process.env.PASSWORD,
        },
    });

    try {
        await transporter.sendMail(message);
    } catch (err) {
        error = true;
    }

    //----------------------------------------

    if (req.email) {
      const message2 = {
        from: process.env.ADDRESS_FROM,
        to: [req.email],
        subject: `Контакты "${req.person_lastName} ${req.person_firstName}"`,
        html: `       <p style="font-weight: bold">Фамилия: <span style="font-weight: normal">${req?.person_lastName}</span></p>
                      <p style="font-weight: bold">Имя: <span style="font-weight: normal">${req?.person_firstName}</span></p>
                      <p style="font-weight: bold">Должность: <span style="font-weight: normal">${req?.person_job}</span></p>
                      <p style="font-weight: bold">Телефон: <span style="font-weight: normal">${req?.person_phone}</span></p>
                      <p style="font-weight: bold">Email: <span style="font-weight: normal">${req?.person_email}</span></p>
               `,
      };

      transporter.sendMail(message2);
    }

    return error
        ? await NextResponse.json({ message: `Server Error!` }, { status: 500 })
        : await NextResponse.json({ message: `Message delivered!` }, { status: 250 });
}
