import SpinnerSrc from '../../assets/spinner.gif';

function Spinner() {
	return (
		<>
			<img style={{ width: '150px', margin: 'auto', display: 'block', paddingBlock: '50px' }} src={SpinnerSrc} alt='Loading...' />
		</>
	);
}

export default Spinner;
