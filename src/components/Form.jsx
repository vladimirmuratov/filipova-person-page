'use client';

import { memo, useState } from 'react';
import { Box, Button, DialogContentText, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { BaseInput } from '@/components/base/BaseInput';
import { sendEmail } from '@/lib/sendEmail';
import { BaseModal } from '@/components/base/BaseModal';
import { alekseeva } from '@/config/person';

export const Form = memo(() => {
    const regExpEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const regExpPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    const [isShowFields, setIsShowFields] = useState(false);
    const [sendForm, setSendForm] = useState(false);
    const [isError, setError] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting},
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            company: '',
            post: '',
            comment: '',
        }
    });

    const onSubmit = async (data) => {
        const payload = {
            ...data,
            person_lastName: alekseeva.lastName,
            person_firstName: alekseeva.firstName,
            person_job: alekseeva.job,
            person_email: alekseeva.email,
            person_phone: alekseeva.phone,
        };

        const resStatus = await sendEmail(payload);

        if (resStatus === 250) {
            reset();
            setSendForm(true);
        } else {
            reset();
            setError(true);
        }
    };

    const handleOpenFields = () => {
        setIsShowFields(true);
    };

    const handleCloseSuccessMessage = () => {
        setSendForm(false);
    };

    const handleCloseFailedMessage = () => {
        setError(false);
    };

    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    borderRadius: '20px',
                    boxShadow: 'rgb(215, 215, 215) 0 0 16px 0',
                    // padding: '31px 76px 25px',
                    padding: { xs: '25px 30px 25px', sm: '31px 76px 25px' },
                    width: { xs: '90%', sm: '75%' },
                    marginBottom: '100px',
                    // height: '440px',
                    // overflowY: 'auto',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: 17,
                        fontWeight: 600,
                        textAlign: 'center',
                        marginBottom: '37px',
                    }}
                >
                    Оставьте свои контакты для связи
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        alignItems: 'center',
                    }}
                >
                    <BaseInput
                        control={control}
                        label="Имя"
                        name="firstName"
                        required={true}
                        errorType={errors?.firstName?.type}
                        mask="Имя"
                    />
                    {isShowFields && (
                        <BaseInput
                            control={control}
                            label="Фамилия"
                            name="lastName"
                            errorType={errors?.lastName?.type}
                            mask="Фамилия"
                        />

                    )}

                    <BaseInput
                        control={control}
                        label="email"
                        name="email"
                        mask="e-mail@example.com"
                        errorType={errors?.email?.type}
                        regexp={regExpEmail}
                        required={true}
                    />

                    <BaseInput
                        control={control}
                        label="Телефон"
                        name="phone"
                        errorType={errors?.phone?.type}
                        mask="+7 (999) 999-99-99"
                        regexp={regExpPhone}
                    />
                    {isShowFields &&
                        <>
                            <BaseInput
                                control={control}
                                label="Компания"
                                name="company"
                                errorType={errors?.company?.type}
                                mask="Название компании"
                            />

                            <BaseInput
                                control={control}
                                label="Должность"
                                name="post"
                                errorType={errors?.post?.type}
                                mask="Ваша должность"
                            />

                            <BaseInput
                                control={control}
                                label="Комментарий"
                                name="comment"
                                mask="Ваш комментарий"
                            />

                        </>
                    }
                    {!isShowFields && <Typography
                        sx={{
                            fontSize: 16,
                            fontWeight: 400,
                            color: 'var(--blue)',
                            cursor: 'pointer',
                            alignSelf: 'start',
                        }}
                        onClick={handleOpenFields}
                    >
                        Ещё поля
                    </Typography>}
                    <Button
                        type="submit"
                        loading={isSubmitting}
                        sx={{
                            backgroundColor: 'var(--white)',
                            color: 'var(--red)',
                            border: '1px solid var(--blue)',
                            borderRadius: '999px',
                            width: { xs: '100%', sm: '100%' },
                            padding: '18px 0',
                        }}
                    >
                        отправить
                    </Button>
                </Box>
            </Box>

            {sendForm && (
                <BaseModal title="Ваши контакты успешно отправлены" open={sendForm}
                           handleClose={handleCloseSuccessMessage}
                           color="var(--blue)">
                    <DialogContentText id="alert-dialog-description" sx={{ color: 'var(--black)' }}>
                        На вашу почту отправлены контакты "{`${alekseeva.lastName} ${alekseeva.firstName}`}"
                    </DialogContentText>
                </BaseModal>
            )}

            {isError && (
                <BaseModal title="Ошибка сервера!" open={isError} handleClose={handleCloseFailedMessage}
                           color="var(--red)">
                    <DialogContentText id="alert-dialog-description" sx={{ color: 'var(--black)' }}>
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}
        </>
    );
});
