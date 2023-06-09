import "@testing-library/jest-dom"

global.scrollTo = jest.fn()
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }
}