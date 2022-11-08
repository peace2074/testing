import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import { uStore } from "@waelio/ustore";
const label = "test",
  payload = "ustore payload";
uStore.local.set(label, payload);
const test = uStore.local.get(label);
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
  </div>
  <h4>Test: ${label} = ${test}</h4>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
