import React from 'react';
import selectDesign from '../../actions/selectDesign';
import TemplateStore from '../../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';

class LeftPanel extends React.Component {
    static contextTypes = {
        executeAction: React.PropTypes.func.isRequired
    }

    onDesignClick(design) {
        this.context.executeAction(selectDesign, {design: design});
    }

    render() {
        var designList = this.props.template ?
            this.props.template.designs.map(function (design) {
                return (
                    <div key={design.id} onClick={this.onDesignClick.bind(this, design)}>
                        <h5>{design.name}</h5>
                    </div>
                )
            }, this) : null;


        return (
            <div>
                {designList}
            </div>
        );
    }
}

export default connectToStores(
    LeftPanel,
    [TemplateStore],
    function (context, props) {
        var templateStore = context.getStore(TemplateStore);

        return {
            template: templateStore.getSelectedTemplate()
        };
    }
);
