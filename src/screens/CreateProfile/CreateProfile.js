import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Title from 'components/Title';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link as RouterLink } from 'react-router-dom';
import {
    TextMaskCellphone,
    TextMaskCPF,
    TextMaskPhone,
    TextMaskCEP,
} from 'components/Masks';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    title: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    TextContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: theme.spacing(10, 5),
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    button: {
        background: '#BB86FC',
        borderRadius: 3,
        border: 0,
        color: 'black',
        width: 200,
        fontSize: 25,
        margin: theme.spacing(3, 5),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        '&:hover': {
            backgroundColor: '#A256FF',
        },
    },
}));

export default function EditPatientProfile({
    name,
    cpf,
    birthDate,
    gender,
    telephone,
    cellphone,
    number,
    complement,
    cep,
    street,
    neighborhood,
    city,
    state,
    getCEP,
    createProfile,
    updateProfile,
    role,
    diagnostic,
    insert,
}) {
    const classes = useStyles();
    async function onChangeCEP(ev) {
        const { value } = ev.target;

        updateProfile('cep', value);

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }
        await getCEP();
    }

    const changeField = (field, { target: { value } }) => {
        updateProfile(field, value);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.title}
                    >
                        Criar Perfil de Usuário
                    </Typography>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <div className={classes.TextContainer}>
                    <Title>Nome Completo</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={name}
                            name="name"
                            type="text"
                            id="name"
                            autoComplete="current-name"
                            onChange={(event) => changeField('name', event)}
                        />
                    </Grid>
                    <Title>CPF</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={cpf}
                            onChange={(event) => changeField('cpf', event)}
                            name="cpf"
                            type="text"
                            id="cpf"
                            autoComplete="current-cpf"
                            InputProps={{
                                inputComponent: TextMaskCPF,
                            }}
                        />
                    </Grid>
                    <Title>Data de Nascimento</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={birthDate}
                            name="date"
                            type="date"
                            id="date"
                            autoComplete="current-date"
                            onChange={(event) =>
                                changeField('birthDate', event)
                            }
                        />
                    </Grid>
                    <Title>Gênero</Title>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" margin="normal">
                            <Select
                                native
                                value={gender}
                                inputProps={{
                                    name: 'gender',
                                    id: 'outlined-gender-native-simple',
                                }}
                                onChange={(event) =>
                                    changeField('gender', event)
                                }
                            >
                                <option aria-label="None" value="" />
                                <option value={1}>Masculino</option>
                                <option value={2}>Feminino</option>
                                <option value={3}>Prefiro não informar</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Title>Telefone</Title>
                    <Grid item xs={12}>
                        <FormControl>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                value={telephone}
                                name="telephone"
                                onChange={(event) =>
                                    changeField('telephone', event)
                                }
                                required
                                id="telephone"
                                InputProps={{
                                    inputComponent: TextMaskPhone,
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Title>Celular</Title>
                    <Grid item xs={12}>
                        <FormControl>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                value={cellphone}
                                name="cellphone"
                                onChange={(event) =>
                                    changeField('cellphone', event)
                                }
                                required
                                id="cellphone"
                                InputProps={{
                                    inputComponent: TextMaskCellphone,
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Title>CEP</Title>
                    <Grid item xs={12}>
                        <FormControl>
                            <TextField
                                margin="normal"
                                variant="outlined"
                                value={cep}
                                name="cep"
                                id="cep"
                                onChange={onChangeCEP}
                                InputProps={{
                                    inputComponent: TextMaskCEP,
                                }}
                            />
                        </FormControl>
                    </Grid>
                    <Title>Endereço</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={street}
                            onChange={(event) => changeField('street', event)}
                            name="address"
                            type="text"
                            id="address"
                            autoComplete="current-address"
                        />
                    </Grid>
                    <Title>Número</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={number}
                            onChange={(event) => changeField('number', event)}
                            name="number"
                            type="text"
                            id="number"
                            autoComplete="current-number"
                        />
                    </Grid>
                    <Title>Complemento</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={complement}
                            onChange={(event) =>
                                changeField('complement', event)
                            }
                            name="complement"
                            type="text"
                            id="complement"
                            autoComplete="current-complement"
                        />
                    </Grid>
                    <Title>Bairro</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={neighborhood}
                            onChange={(event) =>
                                changeField('neighborhood', event)
                            }
                            name="district"
                            type="text"
                            id="district"
                            autoComplete="current-district"
                        />
                    </Grid>
                    <Title>Cidade</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={city}
                            onChange={(event) => changeField('city', event)}
                            name="city"
                            type="text"
                            id="city"
                            autoComplete="current-city"
                        />
                    </Grid>
                    <Title>Estado</Title>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            variant="outlined"
                            required
                            value={state}
                            onChange={(event) => changeField('state', event)}
                            name="state"
                            type="text"
                            id="state"
                            autoComplete="current-state"
                        ></TextField>
                    </Grid>
                    {role === 2 && (
                        <>
                            <Title>Diagnóstico</Title>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    variant="outlined"
                                    required
                                    value={diagnostic}
                                    onChange={(event) =>
                                        changeField('diagnostic', event)
                                    }
                                    name="diagnostic"
                                    type="text"
                                    id="diagnostic"
                                    autoComplete="current-diagnostic"
                                />
                            </Grid>
                        </>
                    )}
                    <div className={classes.buttonContainer}>
                        <Button
                            fullWidth
                            component={RouterLink}
                            to="signin"
                            className={classes.button}
                            onClick={createProfile}
                        >
                            Confirmar
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
