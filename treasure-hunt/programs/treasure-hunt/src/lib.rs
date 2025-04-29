use anchor_lang::prelude::*;

declare_id!("HKPyiaTGEBB5kfG88nm8pvwiarRr2j1szBvEdTVDTeK7");

#[program]
pub mod treasure_hunt {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
