window.logic11 = function() {
  logic: while (1) {
    if (waiting) {
      return true;
    }
    if (jumptoLineArray.length > 0) {
      jumptoLine = jumptoLineArrayShift();
    }
    logicSwitch: switch (jumptoLine) {
      case 0:
        if (cmd_isset(5)) {
          cmd_load_pic(0);
          cmd_draw_pic(0);
          cmd_discard_pic(0);
          cmd_set_horizon(0);
          cmd_status_line_on();
          cmd_prevent_input();
          cmd_assignn(42, 0);
          cmd_load_sound(11);
          cmd_sound(11, 147);
          cmd_show_pic();
        }
        if (cmd_isset(147) && !cmd_isset(148)) {
          if (cmd_lessn(42, 20)) {
            cmd_increment(42);
            jumpTo(1);
            break logicSwitch;
          }
          cmd_assignn(42, 0);
          cmd_reset(147);
          cmd_sound(11, 147);
        }
      case 1:
case 2800:
ifSkip = ifSkipArrayShift();
        if ((!cmd_isset(215)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
          if (!cmd_greatern(80, 200)) {
            cmd_increment(80);
          }
case 28000:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(80, 20)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(1);
jumptoLineArray = [2800, 28000, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 11);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
case 28001:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(80, 100)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(2);
jumptoLineArray = [2800, 28001, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 11);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
case 28002:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(80, 120)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(3);
jumptoLineArray = [2800, 28002, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 11);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
case 28003:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(80, 140)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(4);
jumptoLineArray = [2800, 28003, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 11);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
case 28004:
ifSkip = ifSkipArrayShift();
          if ((cmd_equaln(80, 160)) || ifSkip) {
switch (jumptoLineArrayShift()) {
default:
            cmd_print(5);
jumptoLineArray = [2800, 28004, 280000];
ifSkipArray = [true, true];
jumpTo(2800, 11);
break logic;
case 280000:
            jumpTo(2);
            break logicSwitch;
}
          }
          if ((cmd_equaln(80, 200)) || ifSkip) {
            if (!cmd_isset(215)) {
              cmd_set(215);
              cmd_increment(3);
            }
            cmd_print(6);
jumptoLineArray = [2801];
jumpTo(2801, 11);
break logic;
          }
}
        }
case 2801:
      case 2:
        if (!cmd_isset(214)) {
          cmd_set(214);
          cmd_increment(3);
        }
//if ((cmd_equaln(80, 200))) {
        if ((cmd_have_key() || cmd_controller(c30))) {
          cmd_new_room(10);
          if (AGI.break_all_logics) return;
        }
//}
        return;

    }
  }
}
MESSAGES[11] = [
  "",
  "Wow! You can't wait to meet her.",
  "You must be smitten with her!",
  "Don't you think you should go and meet her?",
  "Okay, you're staring. It's getting a little creepy...",
  "Seriously, what's wrong with you? You could actually be talking to her by now!",
  "Ahh, so you want to take things slow. Let's hope your patience pays off."
];
CONTROLS[11] = "";
