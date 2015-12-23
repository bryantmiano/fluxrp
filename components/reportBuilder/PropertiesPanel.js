import React from 'react';
import selectDesign from '../../actions/selectDesign';
import DesignStore from '../../stores/DesignStore';
import TemplateStore from '../../stores/TemplateStore';
import { connectToStores, provideContext } from 'fluxible-addons-react';

class PropertiesPanel extends React.Component {
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
    PropertiesPanel,
    [TemplateStore, DesignStore],
    function (context, props) {
        var templateStore = context.getStore(TemplateStore),
            designStore = context.getStore(DesignStore);

        return {
            template: templateStore.getSelectedTemplate(),
            designs: designStore.getDesigns()
        };
    }
);
