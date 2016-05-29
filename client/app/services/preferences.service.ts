import { Section} from '../models';
import _ from 'lodash';

export class PreferencesService  {

    save(opts: any) : void {

        // ML - Find the Items we want to enable for a given document section and document
        // id type
        var enabled = _.filter(opts.sections, (item) => {
            return item.enabled
        });

        var pref = this.getPreferences(opts.pref.type);
        pref.sortedSectionKeys = _.map(enabled, (item) => {
           return item.key;
        });

        console.log(pref);
    }

    isDocumentPrefSet(documentid: string) {
        return false;
    }

    getPreferences(docType: any) {

        var id = docType.templateId;
        var storageId = "doc_" + id;

        var prefString = localStorage.getItem(storageId);
        var pref = JSON.parse(prefString);
        var isSet = pref !== null;

        if(!isSet) {
            pref = {
                id: id,
                isSet: isSet,
                type: docType
            };
        }

        return pref;
    }
}