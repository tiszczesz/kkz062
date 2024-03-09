package com.example.egzamin2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    private String[] animalTypes = {
            "Pies",
            "Kot",
            "Świnka Morska"
    };
    private String selectedAnimal;
    private TextView textViewAge;
    private SeekBar seekBarAge;
    private TextView textViewMessage;
    private EditText editTextName;
    private EditText editTextReason;
    private EditText editTextTime;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ListView listViewSpecies = findViewById(R.id.listViewSpecies);

        ArrayAdapter < String > adapter = new ArrayAdapter < > (this, android.R.layout.simple_list_item_1, animalTypes);

        listViewSpecies.setAdapter(adapter);

        textViewAge = findViewById(R.id.textViewAge);
        seekBarAge = findViewById(R.id.seekBarAge);
        textViewMessage = findViewById(R.id.textViewMessage);
        editTextName = findViewById(R.id.editTextName);
        editTextReason = findViewById(R.id.editTextReason);
        editTextTime = findViewById(R.id.editTextTime);

        listViewSpecies.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView < ? > parent, View view, int position, long id) {

                selectedAnimal = (String) parent.getItemAtPosition(position);
                // tego nie kazali robić w arkuszu ale tak jest ładniej
                Toast.makeText(MainActivity.this, "Wybrano: " + selectedAnimal, Toast.LENGTH_SHORT).show();

                updateSeekBarMax(selectedAnimal);
            }
        });

        seekBarAge.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int progress, boolean fromUser) {

                textViewAge.setText("Ile ma lat? " + progress);
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {

            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {

            }
        });

        Button buttonSubmit = findViewById(R.id.buttonSubmit);
        buttonSubmit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String ownerName = editTextName.getText().toString();
                int animalAge = seekBarAge.getProgress();
                String visitReason = editTextReason.getText().toString();
                String visitTime = editTextTime.getText().toString();

                if (selectedAnimal != null) {

                    String formData = ownerName + ", " + selectedAnimal +
                            ", " + animalAge + ", " + visitReason + ", " + visitTime;

                    textViewMessage.setText(formData);
                }
            }
        });
    }

    private void updateSeekBarMax(String selectedAnimal) {

        switch (selectedAnimal) {
            case "Pies":
                seekBarAge.setMax(20);
                break;
            case "Kot":
                seekBarAge.setMax(18);
                break;
            case "Świnka Morska":
                seekBarAge.setMax(9);
                break;
            default:
                seekBarAge.setMax(20);
                break;
        }
    }
}