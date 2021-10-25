import { debounce } from 'lodash';
import React, { PureComponent } from 'react';

const withPreventDoubleClick = (WrappedComponent) => {
    class PreventDoubleClick extends PureComponent {
        debouncedOnPress = () => {
            this.props.onPress && this.props.onPress();
        };

        onPress = debounce(this.debouncedOnPress, 300, { leading: true, trailing: false });

        render() {
            return <WrappedComponent {...this.props} onPress={this.onPress} />;
        }
    }

    PreventDoubleClick.displayName = `withPreventDoubleClick(${WrappedComponent.displayName || WrappedComponent.name})`;
    return PreventDoubleClick;
};

export default withPreventDoubleClick;
