export const authEndpoints = {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
    getOne: (id) => `/auth/getone/${id}`,
    updateProfile: (id) => `/auth/updateProfile/${id}`,
};

export const contactEndpoints = {
    getContacts: (id) => `/contacts/getcontacts/${id}`,
    getContact: (id) => `/contacts/getContact/${id}`,
    insertContact: (id) => `/contacts/insertContact/${id}`,
    deleteContact: (id) => `/contacts/deleteContact/${id}`,
    updateDataContact: (id) => `/contacts/updateDataContact/${id}`,
};

export const cepEndpoints = {
    getCEP: (id) => `/cep/getcep/?cep=${id}`,
};
