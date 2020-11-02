import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class logobject {
  @JsonProperty('type', String, true)
  public type: string = undefined;

  @JsonProperty('message', String, true)
  public message: string = undefined;

}