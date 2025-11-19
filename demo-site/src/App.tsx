import 'chaser-design-system/layers.css';
import 'chaser-design-system/cssReset.css';
import { Button } from 'chaser-design-system';

const App = () => {
  return (
    <div className="content">
      <Button
        label="Click Me"
        variant="primary"
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
};

export default App;
