// -*- coding: utf-8-unix; -*-

use wasm_bindgen::prelude::*;
use yew::prelude::*;

mod utils;

#[function_component(App)]
fn app() -> Html {
    html! {
        <h1 class="text-black bg-yellow-100">{ "Hello Yew!" }</h1>
    }
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

cfg_if::cfg_if! {
    if #[cfg(feature = "console_log")] {
        fn init_log() {
            use log::Level;
            console_log::init_with_level(Level::Trace).expect("error initializing log");
        }
    } else {
        fn init_log() {
            wasm_logger::init(wasm_logger::Config::default().module_prefix("cab"));
        }
    }
}

#[wasm_bindgen(start)]
pub fn run_app() -> Result<(), JsValue> {
    utils::set_panic_hook();
    init_log();
    yew::start_app::<App>();

    Ok(())
}
