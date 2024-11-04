<div class="slideout-manual" id="sm-terminal">
        <header>
		  <div id="page-title-left"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg></div>         
		  <div id="page-title-center"><h1>Terminal</h1></div>
		  <div id="page-title-right" onclick="menumanual('sm-terminal')" class="slideout-manual-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbfbfb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </header>
		<div class="menuBoundry">
		
		
		
		<section id="menu-body" style="width:100%;">
				

			<header style="flex-direction: column;">
			
				<div class="page-title"  style="display: flex; width:100%; margin-bottom:2rem; color:#fbfbfb80; font-size:0.75rem;">
					<div style="font-weight:600; white-space: nowrap;">Terminal</div>&emsp;<div style="width: calc(100% - 6rem);    word-wrap: break-word;    display: inline-block;">Use with caution</div>
				</div>
				
				<div class="page-title-center" style="width: 100%; flex-grow:1; margin-bottom:2rem; color:#fbfbfb80; font-size:0.75rem;">
					<header style="    height: 100%;    width: 100%; margin-top:1rem; border-radius:0.75rem; flex-direction: column; padding:0rem; overflow:hidden; ">
					
					
					
				<div id="terminal">
					<div id="terminalhistory"></div>

					> 

					<div id="terminalinput" contenteditable="true"></div><button id="terminalcaret" for="terminalinput">&nbsp;</button>
				</div>
				
				
					</header>
				</div>

			</header>

	
		</section>
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

			
		</div>
</div>




<style type="text/css">

#terminal {
  background: #000;
  color: #0F0;
  font-family: monospace;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
  word-break: break-all;
  margin: 0;
  padding: 16px;
  width:100%;
}

#terminalinput {
  display: inline;
  outline: none;
  visibility: visible;
}

/*
  If you press the Insert key, the vertical line caret will automatically
  be replaced by a one-character selection.
*/
#terminalinput::selection {
  color: #000;
  background: #0F0;
}

#terminalinput:empty::before {
  content: ' ';
}

@keyframes blink {
  to {
    visibility: hidden;
  }
}

#terminalinput:focus + #caret {
  animation: blink 1s steps(5, start) infinite;
}

#terminalinput.noCaret + #caret {
  visibility: hidden;
}

#terminalcaret {
  border: 0;
  padding: 0;
  outline: none;
  background-color: #0F0;
  display: inline-block;
  font-family: monospace;
}


</style>


<script>

const history = document.getElementById('terminalhistory');
const input = document.getElementById('terminalinput');
const cursor = document.getElementById('cursor');

function focusAndMoveCursorToTheEnd(e) {  
  input.focus();
  
  const range = document.createRange();
  const selection = window.getSelection();
  const { childNodes } = input;
  const lastChildNode = childNodes && childNodes.length - 1;
  
  range.selectNodeContents(lastChildNode === -1 ? input : childNodes[lastChildNode]);
  range.collapse(false);

  selection.removeAllRanges();
  selection.addRange(range);
}

function handleCommand(command) {
  const line = document.createElement('DIV');
  
  line.textContent = `> ${ command }`;
  
  history.appendChild(line);
}

// Every time the selection changes, add or remove the .noCursor
// class to show or hide, respectively, the bug square cursor.
// Note this function could also be used to enforce showing always
// a big square cursor by always selecting 1 chracter from the current
// cursor position, unless it's already at the end, in which case the
// #cursor element should be displayed instead.
document.addEventListener('selectionchange', () => {
  if (document.activeElement.id !== 'input') return;
  
  const range = window.getSelection().getRangeAt(0);
  const start = range.startOffset;
  const end = range.endOffset;
  const length = input.textContent.length;
  
  if (end < length) {
    input.classList.add('noCaret');
  } else {
    input.classList.remove('noCaret');
  }
});

input.addEventListener('input', () => {    
  // If we paste HTML, format it as plain text and break it up
  // input individual lines/commands:
  if (input.childElementCount > 0) {
    const lines = input.innerText.replace(/\n$/, '').split('\n');
    const lastLine = lines[lines.length - 1];
    
    for (let i = 0; i <= lines.length - 2; ++i) {
      handleCommand(lines[i]);
    }
  
    input.textContent = lastLine;
    
    focusAndMoveCursorToTheEnd();
  }
  
  // If we delete everything, display the square caret again:
  if (input.innerText.length === 0) {
    input.classList.remove('noCaret');  
  }  
});

document.addEventListener('keydown', (e) => {   
  // If some key is pressed outside the input, focus it and move the cursor
  // to the end:
  if (e.target !== input) focusAndMoveCursorToTheEnd();
});

input.addEventListener('keydown', (e) => {    
  if (e.key === 'Enter') {
    e.preventDefault();
        
    handleCommand(input.textContent);    
    input.textContent = '';
    focusAndMoveCursorToTheEnd();
	
	console.log(input.textContent);
	
  }
});

// Set the focus to the input so that you can start typing straigh away:
input.focus();


</script>