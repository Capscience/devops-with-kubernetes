use chrono::prelude::*;
use rand::{self, Rng};
use std::thread::sleep;
use std::time::Duration;

fn main() {
    let output = generate_string(32);
    loop {
        let now: DateTime<Local> = Local::now();
        println!("{now}: {output}");
        sleep(Duration::new(5, 0))
    }
}

fn generate_string(length: usize) -> String {
    const CHARS: &[u8] = b"abcdefghijklmnopqrstuvwxyz";
    let mut rng = rand::rng();
    (0..length)
        .map(|_| {
            let index = rng.random_range(0..CHARS.len());
            CHARS[index] as char
        })
        .collect()
}
