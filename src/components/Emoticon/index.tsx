import { getEmoticonImage } from '../../utils'
import './styles.css'

const Emoticon = (props: PropTypes) => (
  <div className="em-container" onClick={props.onEmoticonClick}>
    <img src={getEmoticonImage(props.name)} alt={props.name} />
  </div>
);

export default Emoticon;

interface PropTypes {
  onEmoticonClick(): void,
  name: string,
  key: string
}