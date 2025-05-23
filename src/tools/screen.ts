import { WindowsControlResponse } from '../types/responses.js';
import { createAutomationProvider } from '../providers/factory.js';

export function getScreenSize(): WindowsControlResponse {
  try {
    const provider = createAutomationProvider();
    return provider.screen.getScreenSize();
  } catch (error) {
    return {
      success: false,
      message: `Failed to get screen size: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export function getActiveWindow(): WindowsControlResponse {
  try {
    const provider = createAutomationProvider();
    return provider.screen.getActiveWindow();
  } catch (error) {
    return {
      success: false,
      message: `Failed to get active window information: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export function focusWindow(title: string): WindowsControlResponse {
  try {
    const provider = createAutomationProvider();
    return provider.screen.focusWindow(title);
  } catch (error) {
    return {
      success: false,
      message: `Failed to focus window: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export async function resizeWindow(
  title: string,
  width: number,
  height: number,
): Promise<WindowsControlResponse> {
  try {
    const provider = createAutomationProvider();
    return await provider.screen.resizeWindow(title, width, height);
  } catch (error) {
    return {
      success: false,
      message: `Failed to resize window: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}

export async function repositionWindow(
  title: string,
  x: number,
  y: number,
): Promise<WindowsControlResponse> {
  try {
    const provider = createAutomationProvider();
    return await provider.screen.repositionWindow(title, x, y);
  } catch (error) {
    return {
      success: false,
      message: `Failed to reposition window: ${error instanceof Error ? error.message : String(error)}`,
    };
  }
}
