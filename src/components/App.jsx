import {Section} from './Section'
import { Button } from './Button';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '20px',
        fontSize: 20,
         color: '#010101',
      }}
    >
      <Section title='Please leave feedback'>
        <Button title='Good'/>
        <Button title='Neutral'/>
        <Button title='Bad'/>
      </Section>
      <Section title='Statistics'>
        <Button title='Good'/>
        <Button title='Neutral'/>
        <Button title='Bad'/>
      </Section>
    </div>
  );
};
