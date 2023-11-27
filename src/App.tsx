import { useState, JSX } from 'react';
import 'devextreme/dist/css/dx.light.css';
import { Button } from 'devextreme-react/button';


function App(): JSX.Element {
	const [count, setCount] = useState(0)

	return (
		<div>
			<Button 
				text={`Clicked ${count} times`} 
				type='default' 
				onClick={() => setCount(cnt => cnt + 1)}
			/>
		</div>
	)
}

export default App
