import React from "react";
import { DataEditor } from "../../data-editor/data-editor";
import {
    BeautifulWrapper,
    Description,
    PropName,
    useMockDataGenerator,
    defaultProps,
} from "../../data-editor/stories/utils";
import { GridCellKind } from "../../data-grid/data-grid-types";
import { SimpleThemeWrapper } from "../../stories/story-utils";

export default {
    title: "Glide-Data-Grid/DataEditor Demos",

    decorators: [

    ],
};

export const DrawCustomCells: React.VFC = () => {
    const { cols, getCellContent } = useMockDataGenerator(6);

    return (
        <DataEditor
            {...defaultProps}
            getCellContent={getCellContent}
            columns={cols.map(i => ({ ...i, themeOverride: { bgHeader: 'black' } })).slice(0, 2)}
            getRowThemeOverride={() => ({ bgCell: 'black', borderColor: 'yellow' })}
            theme={{ colorHeaderUnderline: 'red', borderHeaderColor: 'blue', borderCellColor: 'yellow' }}
            rows={2}
        />
    );
};
