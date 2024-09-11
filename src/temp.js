import React, { useRef, useEffect } from 'react';
function App() {
 const buttonRef = useRef(null);
 useEffect(() => {
 if (buttonRef.current) {
 buttonRef.current.addEventListener('click', () => {
 console.log('Button clicked!');
 });
 }
 }, []);
 return (
 <div>
 <button ref={buttonRef}>Click Me</button>
 </div>
 );
}
export default App;
