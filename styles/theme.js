// Design system theme configuration
export const theme = {
  colors: {
    primary: {
      orange: '#ff6600',
      gradient: {
        start: 'hsl(98 100% 62%)',
        end: 'hsl(204 100% 59%)',
        animated: {
          from: 'hsl(210 100% 59%)',
          to: 'hsl(310 100% 59%)'
        }
      }
    },
    text: {
      primary: '#ffffff',
      secondary: '#9CA3AF',
      muted: '#666666'
    },
    background: {
      primary: '#000000',
      secondary: '#101010'
    }
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },
  
  animations: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      sphere: '2s',
      rotation: '5s'
    },
    easing: {
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out'
    }
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  
  typography: {
    fontFamily: {
      mono: '"Dank Mono", ui-monospace, monospace',
      sans: 'system-ui, -apple-system, sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      hero: '10vmin'
    }
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    glow: '0 0 0.3vmin 0.3vmin'
  }
};

// CSS Custom Properties generator
export const generateCSSVariables = (theme) => {
  const cssVars = {};
  
  const flatten = (obj, prefix = '') => {
    Object.keys(obj).forEach(key => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}-${key}` : key;
      
      if (typeof value === 'object' && value !== null) {
        flatten(value, newKey);
      } else {
        cssVars[`--${newKey}`] = value;
      }
    });
  };
  
  flatten(theme);
  return cssVars;
};

export default theme;