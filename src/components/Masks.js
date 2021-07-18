import React from 'react';
import TextInputMask from 'react-native-text-input-mask';

export function TextMaskCPF(props) {
    const { inputRef, ...other } = props;

    return (
        <TextInputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                /[0-9]/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '.',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
            ]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export function TextMaskCellphone(props) {
    const { inputRef, ...other } = props;

    return (
        <TextInputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                '(',
                /[0-9]/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export function TextMaskPhone(props) {
    const { inputRef, ...other } = props;

    return (
        <TextInputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[
                '(',
                /[0-9]/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
            ]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

export function TextMaskCEP(props) {
    const { inputRef, ...other } = props;

    return (
        <TextInputMask
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}


