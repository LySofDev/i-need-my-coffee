import { compose } from 'recompose';
import { FlashConsumer } from './FlashContext';
import Flash from './Flash';
import HideIfNoMessagesAvailable from './HideIfNoMessagesAvailable';

export { FlashConsumer, FlashProvider } from './FlashContext';

export default compose(FlashConsumer, HideIfNoMessagesAvailable)(Flash);
