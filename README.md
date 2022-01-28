# React Snackbar

React { Snackbar } is a package for showing messages or popups.

## Installation

Use the package manager yarn or NPM to install React Snackbar.

```bash
yarn install react-snackbar-popup
```

## Usage

```python
import Snackbar from 'react-snackbar-popup'

const [showSnackbar, setShowSnackbar] = useState(false);

const handleSnackbar = () => {
    setShowSnackbar(false)
}

<Snackbar
    message={"Hello World"}
    type={'success'}
    duration={5000}
    closeAlert={e => handleSnackbar(e)}
    open={showSnackbar}
/>

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://sandeshsingh.com.np/licenses/MIT)