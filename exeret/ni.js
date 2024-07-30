// Check if the field definition is typed
function isTypedFieldDef(fieldDef) {
    // A basic check could be whether 'type' is a property of fieldDef
    return fieldDef && typeof fieldDef.type === 'string';
}

// Check if binning is applied
function isBinning(bin) {
    // A basic check could be whether 'bin' is true or has specific settings
    return bin === true || typeof bin === 'object';
}
