import { ProfileApi } from '../../api/profile.api';
import { UserProfile } from '../../types/profile.types';
import { ApiResponse } from '../../types/api.types';
import { Result } from '../../types/service.types';

export async function loadProfile(): Promise<Result<UserProfile>> {
    const res: ApiResponse<UserProfile> = await ProfileApi.getProfile();
    if (res.isSuccess == true) {
        return { isSuccess: true, value: res.value };
    }
    if (res.error.code === 'NOT_FOUND') {
        return { isSuccess: false, message: 'Profile not found' };
    }
    return { isSuccess: false, message: res.error.message ?? 'Failed to load profile' };
}

export async function saveProfile(profile: UserProfile): Promise<Result<UserProfile>> {
    const res: ApiResponse<UserProfile> = await ProfileApi.updateProfile(profile);
    if (res.isSuccess == true) {
        return { isSuccess: true, value: res.value };
    }
    return { isSuccess: false, message: res.error?.message ?? 'Failed to save profile' };
}