/* eslint-disable indent */
import { red } from '@mui/material/colors'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
    trello: {
        appBarHeight: '48px',
        boardBarHeight: '58px'
    },

    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#4CAF50', // Xanh lá nhạt (Green)
                    contrastText: '#FFFFFF' // Text màu trắng
                },
                secondary: {
                    main: '#FFC107' // Vàng sáng (Amber)
                },
                background: {
                    default: '#F9F9F9' // Xám nhạt cho nền
                }
            }
        },

        dark: {
            palette: {
                primary: {
                    main: '#BB86FC', // Tím ánh sáng (Lavender Purple)
                    contrastText: '#000000' // Text màu đen
                },
                secondary: {
                    main: '#03DAC6' // Xanh ngọc (Teal Green)
                },
                background: {
                    default: '#121212', // Xám đen tối cho nền
                    paper: '#1E1E1E' // Xám nhẹ hơn cho khung
                }
            }
        }
    }
})

export default theme