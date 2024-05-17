import {GarageStep} from "./garage-step";
import {userApi} from "../api/UserApi";

export default class UserStep extends GarageStep{
    updateUserViaApi(user){
        userApi.updateUser(user);
        return this;
    }

    updateAndValidateUser(user){
        userApi.updateUser(user).getCurrentUser();
        return this;
    }

}
export const userStep=new UserStep();