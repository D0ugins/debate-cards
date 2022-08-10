/**
 * Caselist API v1
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Team {
    'name'?: string;
    'displayName'?: string;
    'notes'?: string;
    'debater1First'?: string;
    'debater1Last'?: string;
    'debater1StudentId'?: number;
    'debater2First'?: string;
    'debater2Last'?: string;
    'debater2StudentId'?: number;
    'debater3First'?: string;
    'debater3Last'?: string;
    'debater3StudentId'?: number;
    'debater4First'?: string;
    'debater4Last'?: string;
    'debater4StudentId'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string"
        },
        {
            "name": "debater1First",
            "baseName": "debater1_first",
            "type": "string"
        },
        {
            "name": "debater1Last",
            "baseName": "debater1_last",
            "type": "string"
        },
        {
            "name": "debater1StudentId",
            "baseName": "debater1_student_id",
            "type": "number"
        },
        {
            "name": "debater2First",
            "baseName": "debater2_first",
            "type": "string"
        },
        {
            "name": "debater2Last",
            "baseName": "debater2_last",
            "type": "string"
        },
        {
            "name": "debater2StudentId",
            "baseName": "debater2_student_id",
            "type": "number"
        },
        {
            "name": "debater3First",
            "baseName": "debater3_first",
            "type": "string"
        },
        {
            "name": "debater3Last",
            "baseName": "debater3_last",
            "type": "string"
        },
        {
            "name": "debater3StudentId",
            "baseName": "debater3_student_id",
            "type": "number"
        },
        {
            "name": "debater4First",
            "baseName": "debater4_first",
            "type": "string"
        },
        {
            "name": "debater4Last",
            "baseName": "debater4_last",
            "type": "string"
        },
        {
            "name": "debater4StudentId",
            "baseName": "debater4_student_id",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Team.attributeTypeMap;
    }
}

