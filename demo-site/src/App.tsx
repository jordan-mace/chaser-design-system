import '@jordan-mace/chaser-design-system/layers.css';
import '@jordan-mace/chaser-design-system/cssReset.css';
import { Button } from '@jordan-mace/chaser-design-system';

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
