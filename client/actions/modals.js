const MODAL = 'MODAL';

export const OPEN_MODAL = `${MODAL}/OPEN`;
export const openModal = id => ({ type: OPEN_MODAL, id });

export const CLOSE_MODAL = `${MODAL}/CLOSE`;
