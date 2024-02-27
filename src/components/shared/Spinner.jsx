import SpinnerSrc from '../../assets/spinner.gif';

function Spinner() {
	return (
		<>
			<img style={{ width: '100px', margin: 'auto', display: 'block' }} src={SpinnerSrc} alt='Loading...' />
		</>
	);
}

export default Spinner;
