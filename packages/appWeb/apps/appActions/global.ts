/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 */

import * as Types from '@app/types'

export async function timeout(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Timed out')), ms)
  })
}

export function skipLogin() {
  return {
    type: Types.authModel.SKIPPED_LOGIN
  }
}

export function showAppOverlay(model: IOverlayModel) {
  return {
    type: Types.global.APP_OVERLAY_SHOW_MODEL,
    payload: model
  }
}

export function dismissAppOverlay() {
  return {
    type: Types.global.APP_OVERLAY_DISMISS_MODEL
  }
}
