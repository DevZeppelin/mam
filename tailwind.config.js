module.exports = {
    purge: false,
    content: [
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}',
      ],
    theme: {
        screens: {
            'md': '850px',
        },
        extend: {
            colors : {
                primary : '#EAF6F6',
                secundary: '#353B48',                
                gray: '#545454',
                lightGray: '#ADADAD',
                darkGray: '#1d1d1d',
                lowContrast: '#B31312' ,
                background: '#d6d4d4',
                backgroundSecundary: '#EF6262',
                dgreen: '#900C3F',
                lgreen: '#ABC9FF',
                
                bluemam:'#0E2954'
            },
            
            backgroundImage: theme => ({
                'hero': "url('/hero.png')",  
                'hero2': "url('/hero2.png')",                    
                'hero3': "url('/hero3.png')"                     
               })
        },
        grayscale: {
            100: '100%',
        },
        grayscale: ['hover']
    },
    
    variants: {
       
        borderColor: ["hover", "focus"],
        borderStyle: ['hover', 'focus'], 
          
    },
    plugins: []
}