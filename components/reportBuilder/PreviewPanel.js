import React from 'react';
import selectDesign from '../../actions/selectDesign';
import DesignStore from '../../stores/DesignStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';

class PreviewPanel extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    }

    onDesignClick(design) {
        this.context.executeAction(selectDesign, {design: design});
    }

    render() {
        var designList = this.props.designs ?
            this.props.designs.map(function (design) {
                return (
                    <div key={design.id} onClick={this.onDesignClick.bind(this, design)}>
                        <h5>{design.name} (preview)</h5>
                    </div>
                )
            }, this) : null;


        return (
            <div className={this.props.className}>
                {designList}
            </div>
        );
    }
}

export default connectToStores(
    PreviewPanel,
    [DesignStore],
    function (context, props) {
        var designStore = context.getStore(DesignStore);

        return {
            designs: designStore.getDesigns()
        };
    }
);
