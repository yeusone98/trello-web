/* eslint-disable indent */

import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
// import { teal, deepOrange, cyan, orange } from '@mui/material/colors'

const theme = extendTheme({
    trello: {
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },

    colorSchemes: {
        // light: {
        //     palette: {
        //         primary: teal,
        //         secondary: deepOrange
        //     }
        // },
        // dark: {
        //     palette: {
        //         mode: 'dark',
        //         primary: {
        //             main: '#ff5252'
        //         }
        //     }
        // }
    },
    components: {
        MuiCssBaseline: {
            styleOverride: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#bdc3c7',
                        borderRadius: '8px'
                    },
                    '*::-webkit-scrollbar-thumb::hover': {
                        backgroundColor: '#00b894'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem'
                })
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: '0.875rem',
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                        }
                    },
                    '& fieldset': {
                        borderWidth: '1px !important'
                    }
                })
            }
        }
    }
})

export default theme